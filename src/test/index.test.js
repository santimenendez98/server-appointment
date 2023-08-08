import app from "../app";
import seed from "../seed";
import Appointment from "../schema";
import request from "supertest";

beforeAll(async () => {
  await Appointment.collection.insertMany(seed);
});

const mockAppointment = {
  name: "Luis",
  lastName: "Rodriguez",
  subject: "Dolores",
  message: "Probando si funciona",
  date: "2023-12-12",
};

describe("Create:", () => {
  test("Name, lastName and Subject should be only letters", async () => {
    const response = await request(app)
      .post("/api/appointment")
      .send(mockAppointment);
    expect(response.body.name).toMatch(/^[A-Za-z\s]+$/);
    expect(response.body.lastName).toMatch(/^[A-Za-z\s]+$/);
    expect(response.body.subject).toMatch(/^[A-Za-z\s]+$/);
  });
  test("Should be status 200", async () => {
    const response = (await request(app).post("/api/appointment")).send(
      mockAppointment
    );
    expect(response.status).toBe(200);
    expect(response.error).toBeFalsy();
  });
});
