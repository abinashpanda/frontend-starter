---
to: src/hooks/use-<%= name %>.ts
---
import constate from 'constate'

export function use<%= h.changeCase.pascal(name) %>() {
  return {}
}

export const [<%= h.changeCase.pascal(name) %>Provider, use<%= h.changeCase.pascal(name) %>Context] = constate(use<%= h.changeCase.pascal(name) %>)
