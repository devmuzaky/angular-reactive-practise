# About The Project

This project is a simple Angular application that allows users to create and manage a list of courses. The application is built using the Angular CLI and uses Angular Material for the UI components.

### Review of an application written in imperative style
- The course starts by reviewing an existing Angular application written in an imperative style, where components use stateful services to communicate and update the UI. The drawbacks of this approach are discussed, such as coupling, complexity, and difficulty to test.

### Refactoring into stateless reactive style, understanding the benefits
- The course then introduces the reactive programming paradigm and how it can be applied to Angular applications. The benefits of this approach, such as scalability, maintainability, and testability, are explained. A step-by-step guide is given to refactor the previous application into a stateless reactive style.

### Smart vs Presentational Components
- The course discusses the difference between smart and presentational components, and how to use them effectively in a reactive architecture. Smart components handle business logic and interact with services, while presentational components focus on rendering data and handling user events.

### Stateless Observable Services
- Observable services are introduced as a way to encapsulate and share data streams among components. The course explains how to create stateless observable services, which emit data in response to events or actions, and how to consume them in components.

### The shareReplay Operator
- The shareReplay operator is presented as a way to avoid multiple subscriptions and unnecessary data fetches in observable services. The operator caches the last emitted value of an observable and shares it among all subscribers.

### Stateless UI updates (without state management)
- The course demonstrates how to update the UI in a reactive style without using traditional state management techniques, such as Redux or NgRx. Components subscribe to observable services and use the async pipe to render data in the template.

### Introduction to RxJs Subjects and BehaviorSubject
- Subjects and BehaviorSubjects are introduced as a way to create and control data streams from scratch. The course explains the difference between them and how to use them in observable services and component communication.

### Decoupled component communication using shared observable services
- The course shows how to use observable services as a decoupled communication channel between components. Components can emit events or actions to the service, and other components can subscribe to them and react accordingly.

### Using Observables to have components interact at different levels of the component tree
- The course explains how to use observable services to allow communication between components that are not direct siblings or children. Components can emit events or actions to the service, and other components that are not in the same branch of the component tree can subscribe to them and react accordingly.

### Error Handling and error messages in reactive style
- The course demonstrates how to handle errors in a reactive style using observable services and RxJS operators. Error messages can be emitted by services and propagated to components, where they can be displayed in the UI.

### Loading Indicators in reactive style
- The course shows how to display loading indicators in a reactive style using observable services and RxJS operators. Components can subscribe to loading observables and show or hide indicators depending on the state.

### Improving user experience with lightweight RxJs stores
- The course presents a lightweight store pattern using observable services and RxJS operators. The store encapsulates the state of the application and provides methods to update it, which are consumed by components using observable services.

### Optimistic UI updates
- The course demonstrates how to implement optimistic UI updates in a reactive style. Components can update the UI immediately, and the state is later synchronized with the server using observable services and RxJS operators.

### Managing User Authentication state with plain RxJs
- The course shows how to manage user authentication state using plain RxJS operators


## Contact

- [LinkedIn](https://www.linkedin.com/in/devmuzaky/)
- [Twitter](https://twitter.com/devmuzaky)
- [Email me](mailto:devmuzaky@gmail.com)


