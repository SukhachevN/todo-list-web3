export type TodoListWeb3 = {
  "version": "0.1.0",
  "name": "todo_list_web3",
  "instructions": [
    {
      "name": "createTodo",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "todo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateTodoParams"
          }
        }
      ]
    },
    {
      "name": "updateTodo",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "todo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UpdateTodoParams"
          }
        }
      ]
    },
    {
      "name": "deleteTodo",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "todo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counter",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "todoCounterState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "total",
            "type": "u64"
          },
          {
            "name": "completed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "todoState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "deadline",
            "type": "i64"
          },
          {
            "name": "isCompleted",
            "type": "bool"
          },
          {
            "name": "createDate",
            "type": "i64"
          },
          {
            "name": "completeDate",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateTodoParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "deadline",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "UpdateTodoParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "deadline",
            "type": "i64"
          },
          {
            "name": "isCompleted",
            "type": "bool"
          }
        ]
      }
    }
  ]
};

export const IDL: TodoListWeb3 = {
  "version": "0.1.0",
  "name": "todo_list_web3",
  "instructions": [
    {
      "name": "createTodo",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "todo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateTodoParams"
          }
        }
      ]
    },
    {
      "name": "updateTodo",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "todo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UpdateTodoParams"
          }
        }
      ]
    },
    {
      "name": "deleteTodo",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "todo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counter",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "todoCounterState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "total",
            "type": "u64"
          },
          {
            "name": "completed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "todoState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "deadline",
            "type": "i64"
          },
          {
            "name": "isCompleted",
            "type": "bool"
          },
          {
            "name": "createDate",
            "type": "i64"
          },
          {
            "name": "completeDate",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateTodoParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "deadline",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "UpdateTodoParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "deadline",
            "type": "i64"
          },
          {
            "name": "isCompleted",
            "type": "bool"
          }
        ]
      }
    }
  ]
};
