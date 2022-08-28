import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material"
import { AppBar } from "@mui/material"
import { useEffect } from "react";
import { useState } from "react";

const data = [
  {
    question:
      'Which function is used to serialize an object into a JSON string in Javascript?',
    a: 'stringify()',
    b: 'parse()',
    c: 'convert()',
    d: 'none',
    ans: ['a'],
  },
  {
    question:
      'When an operator\'s value is NULL, the typeof returned by the unary operator is:',
    a: 'Boolean',
    b: 'Undefined',
    c: 'Object',
    d: 'Integer',
    ans: ['b'],
  },
  {
    question: 'Which of the following is/are Javascript framework?',
    a: 'Node',
    b: 'Vue',
    c: 'React',
    d: 'Cassandra',
    ans: ['a', 'b', 'c'],
  },
  {
    question:
      'What keyword is used to declare an asynchronous function in Javascript',
    a: 'setTimeout',
    b: 'await',
    c: 'async',
    d: 'none',
    ans: ['c'],
  },
  {
    question: 'How can a datatype be declared to be a mutable type?',
    a: 'const',
    b: 'var',
    c: 'let',
    d: 'constant',
    ans: ['b', 'c'],
  },
];

function App() {
  const [cur, setCur] = useState(0);
  const [formData, setFormData] = React.useState(
    {
        a:false,
         b:false,
          c:false,
           d:false
    }
)

  function nexthandler() {
    if (cur < 4 && cur >= 0) {
      setCur(cur + 1)
    }
    else {
      setCur(4)
    }
  }

  function prevhandler() {
    if (cur <= 4 && cur > 0) {
      setCur(cur - 1)
    }
    else {
      setCur(0)
    }
  }

  console.log(formData)
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

  // function handlechange(event) {
  //   const sel = parseInt(event.target.name)
  //   setChecked((v) => {
  //     v.forEach((val, index) => {
  //       if (sel == index) {
  //         val = !val
  //       }
  //       else {
  //         val = val
  //       }
  //     }
  //   )
  //     console.log(v)
  //     return v;
  //   }
  //   )
  // }

  useEffect(() => {
    const ans = data[cur].ans
  }, [cur])

  return (
    <Box>
      <AppBar position="static">
        <Typography variant="h6" component="div" sx={{
          marginLeft: 5
        }}>
          quiz
        </Typography>
      </AppBar>
      <Container sx={{
        backgroundColor: "pink"
      }}>
        <Button onClick={prevhandler}>PREV</Button>
        <Button onClick={nexthandler}>NEXT</Button>
        <Box>
          <Typography variant="h5">
            {cur + 1}. {data[cur].question}
          </Typography>
          <Checkbox id="a"  checked={formData.a} onChange={handlechange} name="a" />
          <Typography variant="h6" component="span">
            a. {data[cur].a}
          </Typography>
          <br />
          <Checkbox id="b"  checked={formData.b} onChange={handlechange} name="b" />
          <Typography variant="h6" component="span">
            b. {data[cur].b}
          </Typography>
          <br />
          <Checkbox id="c" checked={formData.c} onChange={handlechange} name="c" />
          <Typography variant="h6" component="span">
            c. {data[cur].c}
          </Typography>
          <br />
          <Checkbox  id="d" checked={formData.d} onChange={handlechange} name="d" />
          <Typography variant="h6" component="span">
            d. {data[cur].d}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default App
