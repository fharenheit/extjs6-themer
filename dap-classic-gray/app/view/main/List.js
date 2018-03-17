/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'App.store.Personnel'
    ],

    title: '개인',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: '성명',  dataIndex: 'name' },
        { text: '전자우편', dataIndex: 'email', flex: 1 },
        { text: '전화번호', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
