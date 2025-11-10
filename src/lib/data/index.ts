import { ICertification } from "../types";
import certifications from "./certifications.json"

export const getCertifications = (): ICertification[] => {
  return certifications
};
