import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type Appointment = {
    id : Nat;
    name : Text;
    phone : Text;
    service : Text;
    date : Text;
    time : Text;
  };

  module Appointment {
    public func compare(appointment1 : Appointment, appointment2 : Appointment) : Order.Order {
      Nat.compare(appointment1.id, appointment2.id);
    };
  };

  var nextBookingId = 0;

  let appointments = Map.empty<Nat, Appointment>();

  public shared ({ caller }) func bookAppointment(name : Text, phone : Text, service : Text, date : Text, time : Text) : async Nat {
    let bookingId = nextBookingId;
    nextBookingId += 1;

    let newAppointment : Appointment = {
      id = bookingId;
      name;
      phone;
      service;
      date;
      time;
    };

    appointments.add(bookingId, newAppointment);
    bookingId;
  };

  public query ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.values().toArray().sort();
  };

  public query ({ caller }) func getAppointmentById(bookingId : Nat) : async Appointment {
    switch (appointments.get(bookingId)) {
      case (null) { Runtime.trap("Appointment with id " # bookingId.toText() # " does not exist!") };
      case (?appointment) { appointment };
    };
  };
};
