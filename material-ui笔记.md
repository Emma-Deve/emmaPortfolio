# Material-ui 笔记

## 定义主题 theme（createMuiTheme，ThemeProvider）
  material-ui有自带的主题，不定义主题时，使用的时自带的主题，如primary为绿色，secondary为紫红色。默认组件包含很多设置，详细参数见官方文档。 
  1. 创建主题：createMuiTheme
    import { createMuiTheme } from '@material-ui/core/styles';
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: '#f44336',
        },
      },
      status: {
        danger:  'orange',
      }
    });
  2. 使用主题：ThemeProvider
    import {ThemeProvider} from '@material-ui/core/styles'
    function App() {
      return (
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <Typography 
            variant="h5" 
            color="primary"  //使用theme的palette中的primary颜色
            >Hello Material-UI</Typography>
            <Button 
            variant="outlined" 
            color="secondary"  //使用theme的palette中的secondary颜色
            >This is a material Button</Button>
          </ThemeProvider>
        </React.StrictMode>
      )
    }
  3. 嵌套多个主题
  使用多个主题时必须用嵌套包裹，不能分开使用，内层主题会覆盖外层主题
    const outerTheme = createMuiTheme({  *定义主题一*
      palette: {
        secondary: {
          main: orange[500],
        },
      },
    })
    const innerTheme = createMuiTheme({  *定义主题二*
      palette: {
        secondary: {
          main: green[500],
        },
      },
    })
    export default function ThemeNesting() {  *使用主题*
      return (
        <ThemeProvider theme={outerTheme}>  *第一层嵌套*
          <Checkbox defaultChecked />
          <ThemeProvider theme={innerTheme}>  *第二层嵌套*
            <Checkbox defaultChecked />
          </ThemeProvider>
        </ThemeProvider>
      );
    }
  4. 访问主题 
    4.1 访问函数主题：useTheme
    用于访问函数组件中的主题变量：如获取主题的spacing值
    通过useTheme访问的主题，只包含用户自定义的主题
      import { ThemeProvider, useTheme } from '@material-ui/core/styles';
      function DeepChild() {  
        const theme = useTheme();  *访问主题:theme={{ spacing: '8px'}}*
        return <span>{`spacing ${theme.spacing}`}</span>;  *获取主题中的spacing值*
      }
      export default function UseTheme() {
        return (
          <ThemeProvider  //使用主题
            theme={{ spacing: '8px'}}  //主题
          >
            <DeepChild />  
          </ThemeProvider>
        );
      }  // 页面显示结果：spacing 8px
    4.2 访问类｜函数主题（高阶）：withTheme
      将 组件MyComponent 用 withTheme 包装成高阶组件，将主题theme通过props传递给MyComponent
      import { withTheme } from '@material-ui/core/styles';
      function MyComponent(props) {
        return 
        <div>
          {props.theme.typography.fontSize}  *通过props.theme访问组件中的参数:包括所有默认主题参数*
        </div>;
      }
      export default withTheme(MyComponent);  *用withTheme将MyComponent包装成高阶组件*

    


## 设置样式 makeStyles
  makeStyles用来自定义样式和样式名：用来 改变 web布局结构 和 标签(material组件)包裹内容 的样式。
  1. 定义样式
    const useStyles = makeStyles({
      textStyle: {
        color: "red",
        backgroundColor: "yellow"
      }
    })
  2. 使用样式：className=定义的样式
  export default Header = (props) => {  *接受父组件props*
    const classes = useStyles(props);  *调用样式函数，传递props*
    return (
          <Typography 
          className={classes.textStyle}  //使用样式
          variant="h5" //material自带的样式被覆盖
          color="primary"  
          >Hello Material-UI</Typography>
    )
  }
  3. 如果样式根据父组件传递的props值改变，则：
    子组件Header：
      const useStyles = makeStyles({
          *如果样式样式需要接受props参数，并根据props参数决定style样式*
          textStyle: props => {
            color: props.cool ? "blue" : "red",
            backgroundColor: props.cool ? "orange" : "yellow"
          }
        })
        export default Header = (props) => {  *接受父组件props*
        const classes = useStyles(props);  *调用样式函数，传递props*
        return (
              <Typography 
              className={classes.textStyle}  //使用样式
              >Hello Material-UI</Typography>
        )
      }
    父组件：
      export default App=()=>{
        const cool = false;
        return <Header cool={cool}>  *向header传递props*
      }
  4. 如果需要向 样式makeStyles 中传入 主题theme
      const useStyles = makeStyles(theme => ({ *传入主题*
          textStyle: {
            color: "red",
            [theme.breakpoints.up("sm")]: {  *使用主题*
              color: "cyan"
            }
            backgroundColor: "yellow"
          }
        }))
        export default Header = () => { 
        const classes = useStyles();
        return (
              <Button 
              className={classes.textStyle}  //使用样式
              >Hello Material-UI</Button>
        )
      }
  5. 同时使用多个样式
    5.1 className={`${classes.style1} ${classes.style2}`}
    5.2 引入 “classNames”
    正常情况material-UI只能同时使用一个样式，如果需要使用多个样式，要安装classnames依赖
      npm i classnames
      import classNames from "classnames" *引入classnames依赖*
      const useStyles = makeStyles(theme => ({ 
          textStyle: {
            color: "red",
            backgroundColor: "yellow"
          },
          buttonStyle:{
            backgroundColor: "red"
          }
        }))
        export default Header = () => { 
        const classes = useStyles();
        return (
              <Button 
              className={classNames(classes.textStyle, classes.buttonStyle)}  //使用classnames，使用多个样式
              >Hello Material-UI</Button>
        )
      }
  6. 如果需要执行多个className，且className为条件为true时执行
    *6.1 className={`${disabled && "Mui-disabled"}}
        className={`${disabled && classes.disabled}}
      *定义className样式*
      const useStyles = makeStyles((theme) => ({ 
        expand: {
          transform: "rotate(0deg)",
          marginLeft: "auto",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
          })
        },
        expandOpen: {
          transform: "rotate(180deg)"
        }
      }))
        *执行样式*
      export default function RecipeReviewCard() {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);  *hook管理expanded状态*
        const handleExpandClick = () => {  *点击事件*
          setExpanded(!expanded);
        };
        return(
          <IconButton
    *6.1 条件判断执行样式*
          *方法一：（三元表达式）expanded为true，执行样式expandOpen*
            className={expanded ? [classes.expandOpen]: ''} 
          *方法二：引入clsx* 推荐
            //引入clsx：import clsx from "clsx"
            className={clsx([classes.expandOpen]:expanded)} 
    *6.1 执行多个样式，包括条件判断样式*
          *方法一：引入classnames*
            //引入classnames： import classNames from "classnames"
            className={
              classnames(
                classes.expand, *应用expand样式*
                expanded ? [classes.expandOpen]: '')  *expanded为true时应用expandOpen样式*
            } 
          *方法二：引入clsx*
            //引入clsx：import clsx from "clsx"
            className={clsx([MuiButton-root], {  *执行MuiButton-root*
              [Mui-disabled]: disabled, *disabled为true执行Mui-disabled*
              [Mui-selected]: selected,  *selected为true执行Mui-selected*
            })}
            onClick={handleExpandClick}  *点击事件：点击改变expanded的值*
          >
            <ExpandMoreIcon />
          </Button>
        )
      }

  6. 修改material自带的css样式：classes={css自带的样式名rule name}
  每个ruleName都有对应的适应条件，如：root适用于所有，textPrimary仅适用于variant=“text”，color="primary"的时候
    const useStyle = makeStyles(theme => ({
      root:{  
        color: "red",
        border: "none"
      }
    }))
    export default App =() =>{
      const classes = useStyle()
      return ( 
        <>
          *root为css自带的rule name, class.root为自定义的root样式*
          <Button classes={{ root: classes.root }}> BUTTON </Button>
        <>
      )
    }

## 修改组件自带样式 withStyles｜makeStyle
  修改组件自带的样式：
    方法一：通过API里面的属性修改，如color=“secondary” elevation={6}等
    方法二：使用material自带的类名，将原有的样式层叠覆盖
  makeStyle与withStyles的区别：
    . makeStyles能传递props，withStyles不能，推荐使用makeStyles
    . makeStyle与withStyle的调用方式不一样(这里演示withStyles的使用方法)
    *第一步：定义*
    const InputField = withStyles({  *将修改的样式重命名为InputField*
      root:{  *根样式*
        width:"30%",
        marginL "0 auto",
        "& label":{   *TextField的label样式，相当于input的placeholder*
          color: "#ffe082",
          "&.Mui-focused":{  *focus时的label样式*
            color: "#ff9800",
            transform:"translate(14px, -6px) scale(0.75)", *focus时label的位置*
          }, 
        },               
        "& .MuiOutlinedInput-root":{  *TextField的外框样式*
          "& fieldset": {  *外框作用范围*
            borderColor: "#ffe082",  *外边框*
            backgroundColor: "red"  *框子背景色*
          },
          "&:hover fieldset": {  *鼠标经过时样式*
            borderColor: "#ffe082",
          },
          "&.Mui-focused fieldset": { *聚焦时样式*
            borderColor: "#ffe082",
          }
        }
      }
    })(TextField) *以TextField为基础修改样式*
    *第二步：调用*
    <InputField  //将TextField换成InputField
    label="Company Name"  *标签*
    variant="outlined"  *类型*
    margin="dense"  *边距：紧凑dense｜普通normal｜没有none*
    inputProps={{style:{color:"white"}}}  *输入文字的样式*
    className={classes.inputStyle}
    />


## 顶部栏 AppBar
  return (
    <AppBar position="static"> //设置appbar布置为静止, 以防覆盖content内容
      <Toolbar>  //AppBar通常和Toolbar配合使用，添加顶部栏内容
        <Typography>Emma Li</Typography> //顶部栏中的内容
        <AcUnit />
      </Toolbar>
    </AppBar>
  )
## 栅格 Grip
  1. 将页面横向或纵向按网格划分，其中横向row共有12份，设置每个元素的占比
      默认方向为row，如果需要竖向对齐，设置direction为column
      direction: row|row-reverse|column|column-reverse
      媒体尺寸： xs ｜ sm ｜ lg ｜ xl 
      某个Grid继续划分小Grid：设置父盒子 为container
  return (
        <Grid container direction="column"> {/* 外部容器，列容器 */}
          <Grid item> {/* 子项 */}
            <Header /> //Header组件
          </Grid>
          <Grid item container> {/* 子项，同时自己也为容器，行容器，共12份 */}
            <Grid item xs={false} sm={2} />  {/* 左侧：xs屏幕为0，sm时为2 */}
            <Grid item xs={12} sm={8} >  {/* 中间：xs屏幕为12，sm时为8 */}
              <Content />  //content组件
            </Grid>
            <Grid item xs={false} sm={2} />  {/* 右侧：xs屏幕为0，sm时为2 */}
          </Grid>
        </Grid>
    )
  2. 网格元素居中
    父Grid盒子参数：
    direction主轴方向: row|row-reverse|column|column-reverse
    justity主轴方向子盒子布置：flex-start|flex-end|center|space-between|space-around|space-evenly
    alignItems侧轴方向自盒子布置(单行): flex-start|flex-end|center|stretch|baseline
    alignContent侧轴方向自盒子布置(多行): flex-start|flex-end|center|stretch|space-between|space-around
    <Grid container justify="center" alignItems="center">   *justify子盒子水平居中，alignItems子盒子竖向居中*
      <Grid item xs={3} style={{textAlign: "center"}}>  *设置子Grid中的文字居中*
        <Alarm />
      </Grid>
    </Grid>

## 卡片Card
    用来呈现一组一组的页面商品信息。
    Card 卡片外壳
    CardActionArea 卡片作用范围
    CardHeader 卡片头部信息
    CardMedia 卡片媒体信息
    CardContent 卡片内容描述
    CardActions 卡片动作

  return (
    <Card>  *卡片*
      <CardHeader //卡片头部 
        avatar={  //卡片左侧头像
          <Avatar src={avatarUrl} />
        }
        title={title} *卡片中间标题*
        subheader={price} *卡片中间副标题*
        action={  *卡片右侧动作*
        <Share />
        }
      />
      <CardMedia //卡片中间图片展示
      className={classes.media}
        image={imageUrl}
      />
      <CardContent>  *卡片内容描述*
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>  *卡片尾部动作*
        <Button className={classes.button}>Buy Now</Button>
        <Button className={classes.button}>OFFER</Button>
      </CardActions>
    </Card>
  )
## Button
  import React from 'react'
  import {Button, IconButton} from '@material-iu/cores'
  import {Alarm, Delete} from '@material-ui/icons' 图标引入方法一
  //import AlarmIcon from '@material-ui/icons/AlarmIcon' 图标引入方法二

  export default App=()=>{
    return (
      <div>
        /* 1.普通按钮：
        variant：contained盒子 | outlined边框默认 | text
        color：default默认 | inherit | primary主要｜secondary次要
        size: small | middle默认 | large
        fullWith: 全宽
        disable：禁用 Ripple波纹默认 Elevation立体效果 disabled禁用按钮
        href：链接
        onClick={}：点击事件*/
        <Button variant="contained" size="small" color="primary"  href="#contained-buttons">
          Link
        </Button>
        /* 2. 图标按钮：
          按钮的内容为图标，从icons中引入对应图标组件，通常需要加上对应label名*/
        <IconButton color="secondary" aria-label="add an alarm">
          <Alarm>
        </IconButton>
        /* 3. 在普通Button中加入Icon
        startIcon：内容前面加icon
        endIcon：内容后面加icon */
        <Button variant="contained" startIcon={<Delete />}>
          Delete
        </Button>
        /* 4. 其他复杂 button 和样式，详见官方文档 ：
        如果要修改 material button自带的样式，在*/
        /* 5. 按钮组（多个按钮组成）：Button group 
        方向orientation：horizontal默认 ｜ vertical */
        <ButtonGroup 
          orientation="vertical" 
          size="large" 
          color="secondary" 
          variant="contained" 
          aria-label="vertical large contained secondary button group"
        >
          <Button>ONE</Button>
          <Button>TWO</Button>
          <Button>THREE</Button>
        </ButtonGroup>
      </div>
    )
  }

## 文字排版 Typography
  material-ui使用的是Roboto字体，需要自己手动加载
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  Typography属性：
    align： 对其方式 inherit ｜ left ｜ center ｜ right ｜ justify
    color：initial黑色默认 ｜ inherit继承 ｜ primary蓝色 ｜ secondary紫红色 ｜ textPrimary深灰色 ｜ textSecondary灰色 ｜ error红色
    display： initial ｜ block ｜ inline
    noWrap：不换行，默认为 false换行，不换行改成true
    paragraph：默认为false。设置为段落改为true，段落后面会有margin
    variant：h1～h6，subtitle1～2，body1～2，button text，caption text，overline text
    以上是系统自带主题默认的类型，也可以用 variantMapping 自定义variant
  <Typograpy align="right" color="textSecondary" variant="h5" noWrap="true" paragraph="true">
    this is typography
  </Typography>

## 纸张 paper
  应用程序的的背景类似纸张一样平坦、不透明，而其行为也像纸张一样，能够改变大小、与其他纸张绑定或者调换顺序。
  参数：
    elevation: 立体效果，0-24范围，表示阴影的大小，默认为1
    square：是否是方角，如果是true就禁用圆角，默认为false
    variant：是否有边框，默认为无，如果要边框，设置为 “outlined”，outlined时elevation无效
      import React, { useState } from 'react'
      import {Button, createMuiTheme, Grid, Paper, ThemeProvider, Typography, Switch} from '@material-ui/core'
      import {yellow, green} from "@material-ui/core/colors"
      export default function App() {
        const [darkMode, setDarkMode] = useState(false) *使用hook设置开关点击对应的变化状态*
        const darkTheme = createMuiTheme( *设置暗色主题*
          palette:{
            type: "dark",
            primary: yellow,
            secondary: green
          }
        })
        const lightTheme = createMuiTheme({})  *亮主题为默认值*
        return (
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> *根据switch使用不同主题*
            <Paper style={{height: "100vh"}}> *设置paper为窗口高度*
            <Grid container direction="column">
              <Typography variant="h1">This is my App</Typography>
              <Button variant="contained" color="primary">This is a button</Button>
              <Button variant="contained" color="secondary">This is another button</Button>
              <Switch   //设置开关
              checked={darkMode} 
              onChange={()=>setDarkMode(!darkMode)}   *每次点击darkMode值取反*
              /> 
            </Grid>
          </Paper>
          </ThemeProvider>
        )
      }

## 模版 Templates
  material-ui有很多自带的小模版，可以用来作为代码参考，或者直接使用在项目中

## 标签 Tab
  Tabs ｜ TabList 用于管理多个标签
  AppBar 头部工具栏，通常将Tab｜TabList用AppBar包裹起来，用来固定在App顶部
  Tab 单个标签
  TabPanel 标签面板，用来展示对应标签详情
  TabScrollButton 标签滚动按钮
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}  //value值，默认为0
            onChange={handleChange} //根据点击设置value值
            variant="scrollable"  //滚动tab
            scrollButtons="on"
            indicatorColor="primary"  //当前tab下划线
            textColor="primary"  // 当前tab颜色
            aria-label="scrollable force tabs example"
          >
            <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(1)} />
            <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    );

## 表单 Table 重要！

## 抽屉 Draw 类似于 Modal
  打开侧边栏
    import React from "react"
    import { Drawer as MUIDrawer, List ListItem, ListItemIcon} from "@material-ui/core"
    import {markStyles} from "@material-ui/core/styles"
    import {Inbox,Mail} from "@material-ui/icons"
    const useStyles = makeStyles({
      drawStyles:{
        display:"flex",
        width:"190px"
      }
    })
    Drawer = props => {  *获取路由组件的history*
      const {history} = props
      const classes = useStyles()
      const itemList =[  *drawer的列表数据*
        {
          text: "Home",  *名字*
          icon: <InboxIcon />,  *图标*
          onClick:()=>history.push('/')  *通过history打开新链接*
        },
        {
          text: "About",
          icon: <MailIcon />,
          onClick:()=>history.push('/about')
        },
        {
          text: "Contact",
          icon: <MailIcon />,
          onClick:()=>history.push('/contact')
        }
      ]
      return(
        <MUIDrawer variant="permanent" className={classes.drawStyles}>  
          <List>
            {itemsList.map((item,index)=>{  *遍历列表数据，生成ListItem*
              const {text, icon, onClick} = item
              return(
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              )
            })}
          </List>
        </MUIDrawer>
      )
    }
    export default withRouter(Drawer)  *包装成路由组件，传递props*

## 面包屑 Breadcrumbs
  多层级目录索引
  import {Breadcrumbs as MUIBreadcrumbs} from "react-router-dom"
  const Breadcrumbs = props =>{
    const {history, location:{pathname}} = props
    const pathnames = pathname.split("/").filter(x => x)
    return (
      <MUIBreadcrumbs aria-label="breadcrumb">
        {pathnames.length > 0 ? ( *如果为当前Home页，设置无链接，否则为有链接*
          <Link onClick={() => history.push("/")}>Home</Link>
        ) : (
          <Typography>Home</Typography>
        )}
        {pathnames.map((name,index)=>{  *最后路径设置为无连接*
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={name}>{name}</Typography>
          ) : (
            <Link key={name} onClick={()=>history.push(routeTo)}>
            {name}
            </Link>
          )
        })}
      </MUIBreadcrumbs>
    )
  }

## 消息显示条 Snackbar
  Snackbar 消息显示条（通常与Alert一起用，中间包裹Alert用于提示消息）
    open：是否显示提示消息（Alert对话框是否一直打开，通常是一个可变的state）
    autoHideDuration：自动隐藏
    onClick：点击事件，设置open值为true，打开Alert提示对话框
  Alert 警告提示
    severity: 颜色，error红|warning橙|info蓝|success绿（默认）
    variant：边框， filled｜outlined｜standard（默认）
  import Snackbar from '@material-ui/core/Snackbar';*引入Snackbar*
  import MuiAlert from '@material-ui/lab/Alert';*引入alert*
  function Alert(props) {  *定义Alert子组件*
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  export default function CustomizedSnackbars() {
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {  *点击x关闭Alert*
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    }
    return(
      <div>
        <Button variant="outlined" onClick={etOpen(true)}>  *定义点击按钮*
          Open success snackbar
        </Button>
        *定义弹出用的：snackbar和alert*
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      </div>
    )
  }

## 展开面板 Accordion
  正常情况只显示head和subHead，将detail内容折叠起来，需要查看时展开
  Accordion 面板区
  AccordionSummary  面板头部展示区
  AccordionDetails  面板详情折叠区
    <Accordion   *面板*
      expanded={expanded === 'panel1'} 
      onChange={handleChange('panel1')}
    >
      <AccordionSummary  *面板头部展示区*
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.heading}>General settings</Typography> 
        <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
      </AccordionSummary>
      <AccordionDetails>  *面板详情折叠区*
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
          maximus est, id dignissim quam.
        </Typography>
      </AccordionDetails>
    </Accordion>

## 案例：profile
  1. components文件夹下面创建一个index.js，用来集合所有的components组件，作为components的入口文件
  2. <Box component="nav">  *Box作为包装组件使用，这里相当于是nav标签*
    为了避免大批量的使用div，每个功能区块用 Box 包起来，根据需要定义为不同的component，使结构更明了
  3. 去掉AppBar周围空白的方法：
      方法一：在html中给body加style={margin:0;}
      方法二：在<App>中引入<CssBaseline/> 重置全局样式，删除浏览器中所有部分的边距
      方法三：在需要重置样式的组件调用出，用<ScopeCssBaseline>包裹:
            <ScopeCssBaseline><MyComponent></ScopeCssBaseline>
  4. 对于icons组件，如果需要其具有button效果，将其包裹在<IconButton>中：
            <IconButton><ArrowBack/></IconButton>
  5. Material-UI很多组件，都可以设置component={}属性，将此组件当作某种自定义的组件使用，如：
      <ListItem key={index} button component={Link} to={'/resume'}> 
      将ListItem组件当作react-router-dom 里面的 Link使用，路径为'/resume'，并加上button效果
  6. css样式伪元素一定不要忘了content，否则不会有效果

## 列表 List
  list 整个list外层
  listItem 每个list行
  ListItemIcon listItem中的图标
  ListItemText listItem中的文字
    <List>
      {
        listItems.map((item,index)=>{
          return(
            *给list加上button效果, 当作Link组件使用*
            <ListItem key={index} button component={Link} to={item.listPath}> 
              <ListItemIcon>{item.listIcon}</ListItemIcon>
              <ListItemText>{item.listText}</ListItemText>
            </ListItem>
          )
        })
      }
    </List>



## 文本输入框 TextField
  <TextField
    label="First Name"
    variant="outlined"
    labelwidth={140}  //focus时标签覆盖输入框的宽度
    margin="dense" //密集程度 dense ｜ normal ｜ none
    inputProps={{style:{color:white}}}  //输入文字样式
    style={{width:"80%", margin:"1rem auto"}} //输入框样式
    className={inputClasses.input}
  />    

## 插件
### 1. react-typed
  文字动态输入效果
  安装： npm i react-typed
    <Typography className={classes.name} variant="h4">
      <Typed strings={['Emma Li']} typeSpeed={40} />
    </Typography>
    <br/>
    <Typography className={classes.subtitle} variant="h5">
      <Typed 
      strings={['Web Design', 'Web Development', 'Front End', 'MERN Stark']} 
      typeSpeed={40} 
      backSpeed={60}
      loop
      />
    </Typography> 
### 2. 动画效果 react-particles-js
  几何线性动画效果
  安装插件：npm i react-particle-js
  import MUIParticles from "react-particles-js"
  const useStyles = makeStyles(theme=>({
    particles:{
      position: "absolute",
      width: "100vw",
      height: "100vh",
    }
  }))
  const Particles=()=>{
    const classes = useStyles()
    return(
      <MUIParticles
      className={classes.particles}
        params={{
          particles:{ //基本设置
            number:{
              value: 45,
              density:{
                enable: true,
                value_area: 600
              }
            },
            shape:{ //节点形状：star，circle,square,triangle
              type:"triangle",
              stroke:{  //节点光晕
                width: 5,
                color:"#ffe082"
              }           
            },
            size:{  //节点尺寸
              value: 8,
              random: true,
              anim: {  //动画效果
                enable: false,
                speed: 20,
                size_min: 0.5,
                sync:false,
              }
            }
          }
        }} />
    )
  }
### 3. 世界电话号码输入框 react-intl-tel-input
  import IntlTelInput from "react-intl-tel-input"
  import "react-intl-tel-input/dist/main.css" 
    <IntlTelInput 
    preferredCountries={["au"]}  //设置默认显示国家
    />
  修改对应的input样式：css
    /* IntlTelInput */
    .intl-tel-input.allow-dropdown input, 
    .intl-tel-input.allow-dropdown input[type=text], 
    .intl-tel-input.allow-dropdown input[type=tel] {
      width: 24rem;
      height: 2.5rem;
      border-radius: 5px;
      border: 1px solid white;
      color: white;
    }
    .intl-tel-input.allow-dropdown input::placeholder{
      color:#ccc
    }
    .intl-tel-input 
    .country-list .flag-box, 
    .intl-tel-input .country-list .country-name {
      margin-right: 6px;
      color: black;
    }


###


###


