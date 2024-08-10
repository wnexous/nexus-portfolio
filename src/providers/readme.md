# how create ur provider

* create an UrProvider.controller.ts file
* ```
  default class UrProviderController extends ProviderControllerI<LoginInterface>

  ```
* create a init() method to run your class
* add ur class initilized on object of states.tsx. The object key are used on useProviders() method

# how get ur provider?

```
const { urProviderKey } = useProviders();
```

urProviderKey is the key used on states.tsx to indexes ur provider

!!! put "use client" on page
