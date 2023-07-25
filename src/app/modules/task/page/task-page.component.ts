import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
})
export class TaskPageComponent implements OnInit {

  groups: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    this.groups = [
      {
        label: 'Nuevos',
        color: 'tomato',
        list: [
          {
            order: 'Como instalar Angular',
            items: [
              {
                key: 'price',
                value: 152,
              },
              {
                key: 'time',
                value: 152,
              },
              {
                key: 'author',
                value: {
                  name: 'Grimaldo SOTO',
                  avatar:
                    'https://avatars.githubusercontent.com/u/118828231?v=4"',
                },
              },
            ],
          },
          {
            order: 'Como instalar Angular',
            items: [
              {
                key: 'price',
                value: 152,
              },
              {
                key: 'time',
                value: 152,
              },
              {
                key: 'author',
                value: {
                  name: 'Grimaldo SOTO',
                  avatar:
                    'https://avatars.githubusercontent.com/u/118828231?v=4"',
                },
              },
            ],
          },
        ],
      },
      {
        label: 'in progress',
        color: 'tomato',
        list: [
          {
            order: 'Como instalar Angular',
            items: [
              {
                key: 'price',
                value: 152,
              },
              {
                key: 'time',
                value: 152,
              },
              {
                key: 'author',
                value: {
                  name: 'Grimaldo SOTO',
                  avatar:
                    'https://avatars.githubusercontent.com/u/118828231?v=4"',
                },
              },
            ],
          },
        ],
      },
      {
        label: 'finish',
        color: 'tomato',
        list: [
          {
            order: 'Como instalar Angular',
            items: [
              {
                key: 'price',
                value: 152,
              },
              {
                key: 'time',
                value: 152,
              },
              {
                key: 'author',
                value: {
                  name: 'Grimaldo SOTO',
                  avatar:
                    'https://avatars.githubusercontent.com/u/118828231?v=4"',
                },
              },
            ],
          },
        ],
      },
    ];
  }

  listUser: Array<{ id: string; name: string }> = [
    {
      id: '1',
      name: 'Leifer',
    },
    {
      id: '2',
      name: 'Maria',
    },
    {
      id: '3',
      name: 'pedro',
    },
  ];
}
