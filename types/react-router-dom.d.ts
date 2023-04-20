import "react-router-dom";
declare module "react-router-dom" {
  export interface RouteMeta {
    title?: string
    icon?: React.ReactNode,
    hide?: boolean
    keepAlive?: boolean
    [key: string]: any
  }

  export interface IndexRouteObject {
    name?: string
    meta?: RouteMeta
  }
  export interface NonIndexRouteObject {
    name?: string
    meta?: RouteMeta
  }
}