import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Appointment {
    id: bigint;
    service: string;
    date: string;
    name: string;
    time: string;
    phone: string;
}
export interface backendInterface {
    bookAppointment(name: string, phone: string, service: string, date: string, time: string): Promise<bigint>;
    getAllAppointments(): Promise<Array<Appointment>>;
    getAppointmentById(bookingId: bigint): Promise<Appointment>;
}
