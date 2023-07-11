import { BaseComponent } from '../utils/base-component'
import { Layout } from './layouts/layout'

class App {
  private root = new BaseComponent({
    attribute: { id: 'root', className: 'root' },
    parent: document.body,
  })

  public init(): void {
    new Layout().create(this.root.element)
  }
}

new App().init()
