# BizzBuzz

Práctica de refactoring

```mermaid

flowchart LR

A(Lee archivo) -->|Obtiene| B(Lista de Explorers)
B --> |Obtiene| C(Explorer en Node)
C --> D{ Score % 3 == 0 && Score % 5 == 0}
D -->|Si| E[FizzBuzz]
D -->|No| F{Score % 3 == 0}
F -->|Si| G[Fizz]
F -->|No| H{ Score % 5 == 0 }
H -->|Si| I[Buzz]
H -->|No| J[Score]

```


