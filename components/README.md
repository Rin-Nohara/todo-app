## 组件

- 文件夹命名为业务组件
- 文件命名为公用组件

### 组件使用注意

- RN 的 `SafeAreaView` 组件预留 IPhone 机型的刘海和底部控制条，已经封装为 `ComponentWrap`，一个页面内使用多个 `ComponentWrap` 会造成间距过大，建议在 screen 根组件使用 `ComponentWrap` 嵌套，应该避免单独封装组件时使用。

- `ScreenPadding` 组件预留了和屏幕之间的边距，开发新页面时嵌套一层就好。
例如：
```typescript
const AddTask: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <ComponentWrap>
      <ScreenPadding>
        <GoBack navigation={navigation} />
        <Text>123</Text>
      </ScreenPadding>
    </ComponentWrap>
  );
}
```

- `Button` 组件已经将 ios 和 android 之间的差异抹平。

- `GoBack` 组件可以回退到上一个页面，需要传入 `navigation` 对象，也可以传入点击时调用的方法。
