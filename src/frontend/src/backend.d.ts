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
    service: string;
    name: string;
    message: string;
    preferredDate: string;
    phone: string;
}
export interface backendInterface {
    bookAppointment(name: string, phone: string, service: string, preferredDate: string, message: string): Promise<void>;
    getAllAppointments(): Promise<Array<Appointment>>;
}
