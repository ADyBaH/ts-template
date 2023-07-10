import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Main } from './main/main'

export class Layout {
  public create(root: HTMLElement): [Header, Main, Footer] {
    const header = new Header(root)
    const main = new Main(root)
    const footer = new Footer(root)

    return [header, main, footer]
  }
}
