const Lang = imports.lang;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const St = imports.gi.St;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Clutter = imports.gi.Clutter;
const Shell = imports.gi.Shell;
const Util = imports.misc.util;
const Gtk = imports.gi.Gtk;
//const PopupServiceItem = imports.popupServiceItem;

const MyPanelObject= new Lang.Class({
  Name: 'MyPanelObject',
  Extends: PanelMenu.Button,

  _init: function() {
    //Call the super-class
    this.parent(St.Align.START);

    //Add the label actor
    this.buttonText = new St.Label({ text: "MyShellExt" });
    this.actor.add_actor(this.buttonText);

    this.MySubMenu = new PopupMenu.PopupSubMenuMenuItem("Service 1");
    this.menu.addMenuItem(this.MySubMenu);
    this.MySubMenu.menu.addMenuItem(new PopupMenu.PopupSwitchMenuItem("Start"));
    this.MySubMenu.menu.addMenuItem(new PopupMenu.PopupSwitchMenuItem("Enable"));

    this.MySubMenu = new PopupMenu.PopupSubMenuMenuItem("Service 1");
    this.menu.addMenuItem(this.MySubMenu);
    this.MySubMenu.menu.addMenuItem(new PopupMenu.PopupSwitchMenuItem("Start"));
    this.MySubMenu.menu.addMenuItem(new PopupMenu.PopupSwitchMenuItem("Enable"));

    this.MySubMenu = new PopupMenu.PopupSubMenuMenuItem("Service 1");
    this.menu.addMenuItem(this.MySubMenu);
    this.MySubMenu.menu.addMenuItem(new PopupMenu.PopupSwitchMenuItem("Start"));
    this.MySubMenu.menu.addMenuItem(new PopupMenu.PopupSwitchMenuItem("Enable"));

    this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());

    let editMenu = new PopupMenu.PopupMenuItem("Edit Services");
    editMenu.actor.connect('button-press-event', function(){ Util.spawn(['bash', '-c','service --status-all > services.txt']);
  } ); //PopupServiceItem.ServicesSystemdSettings
    this.menu.addMenuItem(editMenu);

    //var lists = Util.spawn(['bash', '-c', 'cat services.txt']);

  },

});



function init()  {
}

let MyObject;

function enable()  {
  MyObject = new MyPanelObject();
  Main.panel.addToStatusArea('SamplePanelButton', MyObject);
}

function disable()  {
  if (MyObject) {
    MyObject.destroy();
    MyObject = null;
  }
}
