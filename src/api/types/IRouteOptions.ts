import { RouteGenericInterface } from "fastify";

type RouteOptionKeys = keyof RouteGenericInterface;

export type IRouteOption<Key extends RouteOptionKeys, T> = Record<Key, T>;

type RouteOptionVariation = {
  [K in RouteOptionKeys]: Record<K, unknown>;
}[RouteOptionKeys];

export type IRouteOptions<
  RouteOption1 extends RouteOptionVariation = RouteOptionVariation,
  RouteOption2 extends RouteOptionVariation = RouteOptionVariation,
  RouteOption3 extends RouteOptionVariation = RouteOptionVariation,
  RouteOption4 extends RouteOptionVariation = RouteOptionVariation,
  RouteOption5 extends RouteOptionVariation = RouteOptionVariation,
> = RouteOption1 & RouteOption2 & RouteOption3 & RouteOption4 & RouteOption5;
