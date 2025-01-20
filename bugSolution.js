```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      {/* Solution: Conditional Rendering */}
      {data ? (
        <Text>{data.name}</Text>
      ) : (
        <Text>Loading...</Text>
      )}

      {/* Solution: Optional Chaining */}
      <Text>{data?.name || 'Name not available'}</Text>
    </View>
  );
};
```

The optional chaining operator (`?.`) short-circuits the evaluation if `data` is nullish, preventing the error.  The `|| 'Name not available'` provides a fallback value.