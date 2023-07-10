import { CallbackType } from '../types/callback-type'

class EventEmitter<Str, Arguments> {
  private listeners = new Map()

  public subscribe(eventName: Str, callback: Arguments): boolean {
    const callbackArray = this.listeners.get(eventName) ?? []
    callbackArray.push(callback)
    this.listeners.set(eventName, callbackArray)
    return true
  }

  public unsubscribe(eventName: Str, callback: Arguments): boolean {
    const eventsArray = this.listeners.get(eventName)
    if (!eventsArray) {
      return false
    }
    eventsArray.splice(eventsArray.indexOf(callback), 1)
    return true
  }

  public emit<StringName, Argument>(eventName: StringName, eventArgument?: Argument): boolean {
    const eventsArray = this.listeners.get(eventName)
    if (!eventsArray) {
      return false
    }

    eventsArray.forEach((listener: CallbackType) => listener(eventArgument))
    return true
  }

  public clear(eventName?: Str): boolean {
    if (eventName) {
      this.listeners.set(eventName, [])
      return true
    }
    this.listeners = new Map()
    return true
  }
}

export const emitter = new EventEmitter()
