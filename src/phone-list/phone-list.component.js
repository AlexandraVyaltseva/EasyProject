import phoneListTmpl from './phoneListTemplate.html';
import phoneListCtrl from './phone.controller';

import module from './phone-list.module';

module
    .component('phoneList', {
        template: phoneListTmpl,
        controller: phoneListCtrl,
    });