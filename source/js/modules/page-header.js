import {ScrollLock} from '../utils/scroll-lock';

export class PageHeader {
  constructor() {
    this.header = document.querySelector('[data-header]');
    this.headerToggler = document.querySelector('[data-header-toggle]');
    this.navList = document.querySelector('[data-header-list]');

    this.onHeaderTogglerClick = this.onHeaderTogglerClick.bind(this);
    this.onDocumentKeydown = this.onDocumentKeydown.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
    this._scrollLock = new ScrollLock();
  }

  openHeader() {
    this.header.classList.add('is-open');
    this.headerToggler.setAttribute('aria-pressed', 'true');
    document.addEventListener('keydown', this.onDocumentKeydown);
    this.navList.addEventListener('click', this.onLinkClick);
    this._scrollLock.disableScrolling();
  }

  closeHeader() {
    this.header.classList.remove('is-open');
    this.headerToggler.setAttribute('aria-pressed', 'false');
    document.removeEventListener('keydown', this.onDocumentKeydown);
    this.navList.removeEventListener('click', this.onLinkClick);
    this._scrollLock.enableScrolling();
  }

  onHeaderTogglerClick(evt) {
    evt.preventDefault();
    if (this.header.classList.contains('is-open')) {
      this.closeHeader();
      return;
    }
    this.openHeader();
  }

  onDocumentKeydown(evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      this.closeHeader();
    }
  }

  onLinkClick(evt) {
    if (evt.target.closest('a')) {
      this.closeHeader();
    }
  }

  init() {
    if (!this.header) {
      return;
    }
    this.headerToggler.addEventListener('click', this.onHeaderTogglerClick);
  }
}
