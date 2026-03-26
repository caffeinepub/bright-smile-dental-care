import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Order "mo:core/Order";

actor {
  type Appointment = {
    name : Text;
    phone : Text;
    service : Text;
    preferredDate : Text;
    message : Text;
  };

  module Appointment {
    public func compare(app1 : Appointment, app2 : Appointment) : Order.Order {
      Text.compare(app1.preferredDate, app2.preferredDate);
    };
  };

  let appointments = Map.empty<Text, Appointment>();

  public shared ({ caller }) func bookAppointment(name : Text, phone : Text, service : Text, preferredDate : Text, message : Text) : async () {
    let appointment : Appointment = {
      name;
      phone;
      service;
      preferredDate;
      message;
    };
    appointments.add(name.concat(preferredDate), appointment);
  };

  public query ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.values().toArray().sort();
  };
};
