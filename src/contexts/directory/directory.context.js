import { createContext } from 'react'

import DIRECTORY_DATA from './directory.data'

const directoryContext = createContext(DIRECTORY_DATA);

export default directoryContext;