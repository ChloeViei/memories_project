import mongoose = require("mongoose");
import { Document, Model } from "mongoose";
import { Memory as MemoryInterface} from "../interfaces/memory"
import { memorySchema } from "../Schemas/memory";

export interface MemoryModel extends MemoryInterface, Document {}

export interface MemoryModelStatic extends Model<MemoryModel> {}

export const Memory = mongoose.model<MemoryModel, MemoryModelStatic>("Memory", memorySchema);
