const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

server.use(cors())
server.use(morgan('tiny'))

server.get('/posts', (req, res) => {
  res.send({
    status: 'ok',
    posts: [
      {
        title: 'A really short post',
        content: 'Hello, world!'
      },
      {
        title: 'another post with some more body',
        content: `
        3. Scrolling relative to cursor       *scroll-cursor*

The following commands reposition the edit window (the part of the buffer that
you see) while keeping the cursor on the same line:


              *z<CR>*
z<CR>Redraw, line [count] at top of window (default
      cursor line).  Put cursor at first non-blank in the
      line.


              *zt*
ztLike "z<CR>", but leave the cursor in the same
      column.  {not in Vi}


              *zN<CR>*
z{height}<CR> Redraw, make window {height} lines tall.  This is
      useful to make the number of lines small when screen
      updating is very slow.  Cannot make the height more
      than the physical screen height.


              *z.*
z.Redraw, line [count] at center of window (default
      cursor line).  Put cursor at first non-blank in the
      line.


              *zz*
zzLike "z.", but leave the cursor in the same column.
      Careful: If caps-lock is on, this command becomes
      "ZZ": write buffer and exit!  {not in Vi}


              *z-*
z-Redraw, line [count] at bottom of window (default
      cursor line).  Put cursor at first non-blank in the
      line.


              *zb*
zbLike "z-", but leave the cursor in the same column.
      {not in Vi}
        `
      }
    ]
  })
})

server.listen(process.env.PORT || 3000)
