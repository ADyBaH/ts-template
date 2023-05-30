import { BaseComponentProperties } from '../types/interface'

export class BaseComponent {
  public element
  constructor({ tag = 'div', attribute, parent }: BaseComponentProperties) {
    this.element = document.createElement(tag)
    Object.assign(this.element, attribute)
    if (parent) {
      parent.append(this.element)
    }
  }
}
