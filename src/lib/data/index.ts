import { IEventItem } from "../types"
import events from "./Events/events.json"

export const getEvents = (): IEventItem[] => {
  return events
}