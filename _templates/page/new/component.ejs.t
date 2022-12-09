---
to: src/pages/<%= name %>/<%= name %>.tsx
---
export default function <%= h.changeCase.pascal(name) %>() {
  return (
    <div>
      <h1><%= h.changeCase.sentence(name) %></h1>
    </div>
  )
}
