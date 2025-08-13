/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans SC"', '"PingFang SC"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // 优化为高对比度医疗配色
        primary: '#2A5CAA',  // 医疗蓝
        secondary: '#4CAF50', // 健康绿
        accent: '#FF9800',   // 温馨橙
        warning: '#FF9800',  // 使用橙色替代红色警示
        text: {
          primary: '#333333', // 深灰主文本
          secondary: '#555555', // 次文本
          inverted: '#FFFFFF' // 反白文本
        },
        background: '#FFFFFF' // 白色背景
      },
      // 中老年友好字体大小配置
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.25rem' }],     // 14px
        'sm': ['1rem', { lineHeight: '1.5rem' }],          // 16px
        'base': ['1.125rem', { lineHeight: '1.75rem' }],   // 18px (正文)
        'lg': ['1.25rem', { lineHeight: '1.75rem' }],      // 20px
        'xl': ['1.5rem', { lineHeight: '2rem' }],          // 24px (小标题)
        '2xl': ['1.75rem', { lineHeight: '2.25rem' }],     // 28px
        '3xl': ['2rem', { lineHeight: '2.5rem' }],         // 32px (主标题)
        'button': ['1.5rem', { lineHeight: '1.2' }]       // 24px (按钮文字)
      },
      // 大尺寸触控区域
      spacing: {
        'touch': '3rem', // 48px 触控区域
      },
      minHeight: {
        'touch': '3rem',
      },
      minWidth: {
        'touch': '3rem',
      },
      // 增加阴影提升可读性
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}
