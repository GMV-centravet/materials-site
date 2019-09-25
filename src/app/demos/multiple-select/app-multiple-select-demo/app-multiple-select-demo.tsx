import { Component, Host, h } from '@stencil/core';


@Component({
  tag: 'app-multiple-select-demo',
  styleUrl: 'app-multiple-select-demo.scss',
  shadow: true
})
export class AppMultipleSelectDemo {

  private options: Map<string, string>;

  private manyOptions: Map<string, string>;

  componentWillLoad() {
    this.options = new Map();
    this.options.set('1', 'One');
    this.options.set('2', 'Two');
    this.options.set('3', 'Three');
    this.options.set('4', 'Four');

    this.manyOptions = new Map();
    this.manyOptions.set('1', 'One');
    this.manyOptions.set('2', 'Two');
    this.manyOptions.set('3', 'Three');
    this.manyOptions.set('4', 'Four');
    this.manyOptions.set('5', 'Five');
    this.manyOptions.set('6', 'Six');
    this.manyOptions.set('7', 'Seven');
    this.manyOptions.set('8', 'Height');
    this.manyOptions.set('9', 'Nine');
    this.manyOptions.set('10', 'Ten');
    this.manyOptions.set('11', 'Eleven');
    this.manyOptions.set('12', 'Twelve');
  }

  render() {
    return (
      <Host>
        <app-demo-code-block blockTitle="Multiple select one column">
          <materials-multiple-select slot="demo" label="Toto" dialogTitle="Choose many" options={this.options} />
          <code slot="code">
            {`<materials-multiple-select slot="demo" label="Toto" dialogTitle="Choose many" options={this.options} />`}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Multiple select many columns">
          <materials-multiple-select slot="demo" label="Toto" dialogTitle="Choose many" options={this.manyOptions} maxElementsColumn={4} />
          <code slot="code">
            {`<materials-multiple-select slot="demo" label="Toto" dialogTitle="Choose many" options={this.manyOptions} maxElementsColumn={4} />`}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}
