import { Footer } from './footer'
import { Header } from './header'
// import { Main } from './main'

export class Layout {
  public create(root: HTMLElement): [Header, Footer] {
    const header = new Header(root)
    // const main = new Main(root)
    const footer = new Footer(root)
    return [header, footer]
  }
}
