import { Component, h, Host } from '@stencil/core';
        @Component({
          tag: 'app-list-item-checkbox-demo',
          styleUrl: 'app-list-item-checkbox-demo.scss'
        })
        export class AppListItemCheckboxDemo {

          render() {
            return (
              <Host>
                See list demo <a href="/components/list/demo">Here</a>
              </Host>
            );
          }
        }