export class Component {
  template() {
    return '';
  }

  render($container) {
    const $component = compile(this.template());

    $container.append($component);
  }
}
