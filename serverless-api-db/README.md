graph TD
    subgraph AWS Cloud
        A[Client] -->|HTTP Request| B[API Gateway]
        B -->|Trigger| C[AWS Lambda]
        C -->|Process| D[(Database)]
        C -->|Response| B
        B -->|HTTP Response| A
    end

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#afd,stroke:#333,stroke-width:2px
    style C fill:#59f,stroke:#333,stroke-width:2px
    style D fill:#ffa,stroke:#333,stroke-width:2px
