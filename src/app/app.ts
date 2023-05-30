import { Layout } from './components/layouts/layout'

class App {
  public init(): Layout | boolean {
    const root = document.getElementById('root')
    if (root instanceof HTMLElement) {
      const layout = new Layout()
      layout.create(root)
      return layout
    }
    return false
  }
}

new App().init()
