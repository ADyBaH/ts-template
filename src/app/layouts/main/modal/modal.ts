import { BaseComponent } from '../../../../utils/base-component'
import { EmitterEnum } from '../../../enum/emitter-enum'
import { emitter } from '../../../services/event-emitter'
import './modal.scss'

export class Modal extends BaseComponent {
  constructor(parent: HTMLElement) {
    super({ attribute: { className: 'modal modal_hidden' }, parent })

    this.innerHTML = `
    <div class="modal__win-block">
    <h2 class="modal__win-block_logo">
    Congratulation!
    </h2>
    <p class="modal__win-block_paragraph">
    You completed last task.
    </p>
    </div>
    `

    emitter.subscribe(EmitterEnum.showModal, () => this.toggle('modal_hidden'))
    this.setEventListener('click', () => this.toggle('modal_hidden'))
  }
}
