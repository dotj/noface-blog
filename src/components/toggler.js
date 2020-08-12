import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// TODO
class Toggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <strong>Dark mode</strong>
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default Toggler