import { Component, h, Host } from '@stencil/core';
        @Component({
          tag: 'app-list-demo',
          styleUrl: 'app-list-demo.scss'
        })
        export class AppListDemo {

          render() {
            return (
              <Host>
                <app-demo-code-block blockTitle="Simple list">
                  <materials-list slot="demo">
                    <materials-list-item>Simple item 1</materials-list-item>
                    <materials-list-item>Simple item 2</materials-list-item>
                    <materials-list-item>Simple item 3</materials-list-item>
                  </materials-list>
                  <code slot="code">
                    {`
                      <materials-list>
                        <materials-list-item>Simple item 1</materials-list-item>
                        <materials-list-item>Simple item 2</materials-list-item>
                       <materials-list-item>Simple item 3</materials-list-item>
                      </materials-list>
                    `}
                  </code>
                </app-demo-code-block>
                <app-demo-code-block blockTitle="List with checkbox items">
                  <materials-list slot="demo">
                    <materials-list-item-checkbox label="Checkbox item 1"></materials-list-item-checkbox>
                    <materials-list-item-checkbox label="Checkbox item 2"></materials-list-item-checkbox>
                    <materials-list-item-checkbox label="Checkbox item 3"></materials-list-item-checkbox>
                  </materials-list>
                  <code slot="code">
                    {`
                      <materials-list>
                        <materials-list-item-checkbox label="Checkbox item 1"></materials-list-item-checkbox>
                        <materials-list-item-checkbox label="Checkbox item 2"></materials-list-item-checkbox>
                        <materials-list-item-checkbox label="Checkbox item 3"></materials-list-item-checkbox>
                      </materials-list>
                    `}
                  </code>
                </app-demo-code-block>
                <app-demo-code-block blockTitle="List with styled items">
                  <materials-list slot="demo">
                    <materials-list-item label="Checkbox item 1">
                      <materials-icon name="search" color="#ff9100" slot="item-start" />
                    </materials-list-item>
                    <materials-list-item label="Checkbox item 2"></materials-list-item>
                    <materials-list-item label="Checkbox item 3"></materials-list-item>
                  </materials-list>
                  <code slot="code">
                    {`
                      <materials-list>
                        <materials-list-item-checkbox label="Checkbox item 1"></materials-list-item-checkbox>
                        <materials-list-item-checkbox label="Checkbox item 2"></materials-list-item-checkbox>
                        <materials-list-item-checkbox label="Checkbox item 3"></materials-list-item-checkbox>
                      </materials-list>
                    `}
                  </code>
                </app-demo-code-block>
                <app-demo-code-block blockTitle="List with unique selectable items">
                  
                  <materials-list slot="demo" selectable>
                    <materials-list-item>Simple item 1</materials-list-item>
                    <materials-list-item>Simple item 2</materials-list-item>
                    <materials-list-item>Simple item 3</materials-list-item>
                    <materials-list-item>Simple item 4</materials-list-item>
                  </materials-list>
                  <code slot="code">
                    {`
                      <materials-list selectable>
                        <materials-list-item>Un</materials-list-item>
                        <materials-list-item>Deux</materials-list-item>
                        <materials-list-item>Trois</materials-list-item>
                        <materials-list-item>Quatre</materials-list-item>
                      </materials-list>
                    `}
                  </code>
                </app-demo-code-block>
                <app-demo-code-block  blockTitle="List with multiple selectable items">
                  <materials-list slot="demo" selectable multiple>
                    <materials-list-item selected>Simple item 1</materials-list-item>
                    <materials-list-item>Simple item 2</materials-list-item>
                    <materials-list-item>Simple item 3</materials-list-item>
                    <materials-list-item>Simple item 4</materials-list-item>
                  </materials-list>
                  <code slot="code">
                    {`
                      <materials-list selectable multiple>
                        <materials-list-item>Un</materials-list-item>
                        <materials-list-item>Deux</materials-list-item>
                        <materials-list-item>Trois</materials-list-item>
                        <materials-list-item>Quatre</materials-list-item>
                      </materials-list>
                    `}
                  </code>
                </app-demo-code-block>
              </Host>
            );
          }
        }