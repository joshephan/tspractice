import { Document, Schema, model } from "mongoose";
import UserTypes from "./../types/UserType";

export interface UserTypesModal extends UserTypes, Document {}

const UserSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  pw: {
    type: String, 
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model<UserTypesModal>('User', UserSchema);