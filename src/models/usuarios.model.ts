import { Schema, model } from "mongoose";

export interface IUserApplication {
  name: string;
  email: string;
  password: string;
  image: string;
  google: boolean;
  role: string;
  state: boolean;
}

enum userRoles {
  ADMIN = "ADMIN",
  SELLER = "SELLER"
}

const userApplicationSchema = new Schema<IUserApplication>({
  
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"]
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"]
  },
  image: {
    type: String
  },
  role: {
    type: String,
    required: [true, "El rol es obligatorio"],
    enum: userRoles
  },
  state: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }

});

export const ApplicationUserModel = model<IUserApplication>("UserApplication", userApplicationSchema);