import { BaseComponent } from '../utils/base-component'
import { Layout } from './layouts/layout'

class App {
  public layout = new Layout()
  private root = new BaseComponent({
    attribute: { id: 'root', className: 'root' },
    parent: document.body,
  })

  public init(): boolean {
    if (!this.root) {
      return false
    }
    this.layout.create(this.root.element)
    return true
  }
}

new App().init()
