import { BaseComponentInterface } from '../models/base-component-interface'

export class BaseComponent {
  public element
  constructor({ tag = 'div', attribute, parent }: BaseComponentInterface) {
    this.element = document.createElement(tag)
    Object.assign(this.element, attribute)
    if (parent) {
      parent.append(this.element)
    }
  }

  public set innerText(content: string) {
    this.element.innerText = content
  }

  public get innerText(): string {
    return this.element.innerText
  }

  public set innerHTML(content: string) {
    this.element.innerHTML = content
  }

  public get innerHTML(): string {
    return this.element.innerHTML
  }

  public get inputValue(): string {
    if (this.element instanceof HTMLInputElement) {
      return this.element.value
    }
    return ''
  }

  public set inputValue(value: string) {
    if (this.element instanceof HTMLInputElement) {
      this.element.value = value
    }
  }

  public get className(): string {
    return this.element.className
  }

  public setClassName(value: string): void {
    this.element.className = value
  }

  public removeAllChildren(): void {
    while (this.element.firstChild !== null) {
      if (this.element.firstChild !== null) {
        this.element.removeChild(this.element.firstChild)
      }
    }
  }

  public addClass(className: string): void {
    this.element.classList.add(className)
  }

  public removeClass(className: string): void {
    this.element.classList.remove(className)
  }

  public toggle(className: string): void {
    this.element.classList.toggle(className)
  }

  public setEventListener(name: string, callback: (event: KeyboardEvent | Event) => void): void {
    this.element.addEventListener(name, callback)
  }

  public appendElement(element: HTMLElement): void {
    this.element.append(element)
  }

  public appends(elements: HTMLElement[]): void {
    this.element.append(...elements)
  }
}
