import { BaseComponent } from '../../../utils/base-component'

export class Main extends BaseComponent {
  constructor(root: HTMLElement) {
    super({ tag: 'main', attribute: { className: 'main' }, parent: root })
  }
}
