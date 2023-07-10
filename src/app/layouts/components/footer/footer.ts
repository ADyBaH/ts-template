import { BaseComponent } from '../../../../utils/base-component'
import './footer.scss'

export class Footer extends BaseComponent {
  constructor(root: HTMLElement) {
    super({ tag: 'footer', attribute: { className: 'footer' }, parent: root })

    this.element.innerHTML = `
      <div class= "container">
        <a class = "footer__github" target= "_blank" href="https://github.com/ADyBaH">github</a>
        <h2 class = "footer__logo">© ADyBaH4uK 2023</h2>
        <a class = "footer__rss-logo" target= "_blank" href="https://rs.school/js/"></a>
      </div>
    `
  }
}
