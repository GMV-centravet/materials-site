import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'app-chips-demo',
  styleUrl: 'app-chips-demo.scss'
})
export class AppChipsDemo {

  render() {
    return (
      <Host>
        <app-demo-code-block blockTitle="Chip elements">
          <materials-chip slot="demo">
            Chip
          </materials-chip>
          <code slot="code">
          {`
          <materials-chip>
            Chip
          </materials-chip>
          `}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Colored chip elements">
          <materials-chip slot="demo" color="#f43006">
            Chip hexa color
          </materials-chip>
          <materials-chip slot="demo" color="primary">
            Chip primary
          </materials-chip>
          <materials-chip slot="demo" color="secondary">
            Chip secondary
          </materials-chip>
          <materials-chip slot="demo" inkColor="#FFFFFF">
            Chip text colored
          </materials-chip>
          <code slot="code">
            {`
            <materials-chip color="#f43006">
              Chip hexa color
            </materials-chip>
            <materials-chip color="primary">
              Chip primary
            </materials-chip>
            <materials-chip color="secondary">
              Chip secondary
            </materials-chip>
            <materials-chip inkColor="#FFFFFF">
              Chip text colored
            </materials-chip>
          `}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}