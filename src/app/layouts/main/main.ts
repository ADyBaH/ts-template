import { BaseComponent } from 'utils/base-component'
import { Modal } from './modal/modal'
import './main.scss'

export class Main extends BaseComponent {
  public modal: Modal = new Modal(this.element)

  constructor(root: HTMLElement) {
    super({ tag: 'main', attribute: { className: 'main' }, parent: root })

    this.element.innerHTML = '<h1>main</h1>'
  }
}
