import { createApp, h } from 'vue';
import { useEffect, useRef } from 'react';

// Sample Vue component content
const VueTemplate = {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  template: `
    <div class="p-4 bg-gray-100 rounded-lg shadow">
      <h2 class="text-xl font-bold text-blue-600">Vue Component</h2>
      <p class="my-2">Count: {{ count }}</p>
      <button 
        class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" 
        @click="increment"
      >
        Increment
      </button>
    </div>
  `
}

// React component that wraps Vue component
export default function VueComponent() {
  const vueRoot = useRef(null);
  
  useEffect(() => {
    if (vueRoot.current) {
      const app = createApp(VueTemplate);
      app.mount(vueRoot.current);
      
      return () => {
        app.unmount();
      };
    }
  }, []);
  
  return <div ref={vueRoot}></div>;
} 