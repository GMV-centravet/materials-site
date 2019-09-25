import { Component, h, Host } from '@stencil/core';
        @Component({
          tag: 'app-list-item-demo',
          styleUrl: 'app-list-item-demo.scss'
        })
        export class AppListItemDemo {

          render() {
            return (
              <Host>
                See list demo <a href="/components/list/demo">Here</a>
              </Host>
            );
          }
        }