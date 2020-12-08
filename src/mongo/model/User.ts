import { Document, Schema, model } from "mongoose";
import UserTypes from "./../types/UserType";

export interface UserTypesModal extends UserTypes, Document {}

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pw: {
    type: String,
    required: true,
    unique: false,
  },
});

export default model<UserTypesModal>("User", UserSchema);
