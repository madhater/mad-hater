import { Metadata } from "./metadata.interface";

export interface RouteData {
  heading: string,
  metadata: Metadata, 
  httpStatus: number
}