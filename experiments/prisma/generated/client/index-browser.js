
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.26.0
 * Query Engine version: 9b816b3aa13cc270074f172f30d6eda8a8ce867d
 */
Prisma.prismaVersion = {
  client: "2.26.0",
  engine: "9b816b3aa13cc270074f172f30d6eda8a8ce867d"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.TrafficSourceScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ClickDataScalarFieldEnum = makeEnum({
  id: 'id',
  trafficSourceId: 'trafficSourceId',
  date: 'date',
  campaignId: 'campaignId',
  campaignName: 'campaignName',
  adId: 'adId',
  device: 'device',
  country: 'country',
  domainId: 'domainId',
  clicks: 'clicks',
  spend: 'spend',
  excludedClicks: 'excludedClicks',
  conversions: 'conversions',
  ecpc: 'ecpc',
  ecpa: 'ecpa',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FunnelAccountScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  funnelId: 'funnelId'
});

exports.Prisma.DomainScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  state: 'state',
  creationDate: 'creationDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  funnelAccountId: 'funnelAccountId'
});

exports.Prisma.FunnelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  order: 'order',
  trafficFirstSeen: 'trafficFirstSeen',
  cards: 'cards',
  browserProfile: 'browserProfile',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.TrafficSourceName = makeEnum({
  CONTENT_AD: 'CONTENT_AD',
  OUTBRAIN: 'OUTBRAIN',
  TABOOLA: 'TABOOLA'
});

exports.AccountType = makeEnum({
  BING_ADS: 'BING_ADS',
  GOOGLE_ADS: 'GOOGLE_ADS',
  CLICKBANK: 'CLICKBANK',
  MAXWEB: 'MAXWEB'
});

exports.Prisma.ModelName = makeEnum({
  TrafficSource: 'TrafficSource',
  ClickData: 'ClickData',
  FunnelAccount: 'FunnelAccount',
  Domain: 'Domain',
  Funnel: 'Funnel'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
